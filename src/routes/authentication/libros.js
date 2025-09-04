// Función para obtener datos de un libro desde Open Library usando su ISBN
async function getBookByISBN(isbn) {
  try {
    // 📌 Construimos la URL de la API
    // - El endpoint es "https://openlibrary.org/api/books"
    // - ?bibkeys=ISBN: → especificamos el ISBN del libro
    // - format=json → queremos la respuesta en formato JSON
    // - jscmd=data → pedimos los datos completos (título, autores, etc.)
    const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`

    // 📌 Hacemos la solicitud GET a la API
    const response = await fetch(url)

    // 📌 Convertimos la respuesta en JSON
    const data = await response.json()

    // 📌 La API devuelve un objeto donde la clave es "ISBN:{isbn}"
    // Ejemplo: { "ISBN:0451526538": { title: "1984", authors: [...] } }
    const bookKey = `ISBN:${isbn}`
    const bookData = data[bookKey]

    // 📌 Validamos si encontramos datos
    if (!bookData) {
      console.log('❌ No se encontró información para este ISBN')
      return null
    }

    // 📌 Extraemos datos relevantes
    const bookInfo = {
      titulo: bookData.title,
      autores: bookData.authors ? bookData.authors.map(a => a.name) : [],
      paginas: bookData.number_of_pages || 'Desconocido',
      editorial: bookData.publishers ? bookData.publishers.map(p => p.name) : [],
      fechaPublicacion: bookData.publish_date || 'No disponible',
      portada: bookData.cover ? bookData.cover.medium : 'No disponible'
    }

    // 📌 Retornamos el objeto con los datos del libro
    return bookInfo

  } catch (error) {
    console.error('⚠️ Error al obtener datos del libro:', error)
    return null
  }
}

// ✅ Ejemplo de uso:
getBookByISBN('9780071834087').then(data => console.log(data))