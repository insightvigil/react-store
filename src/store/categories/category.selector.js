import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

//The input is an array of selectors and the output is the function
export const selectCategories = createSelector([selectCategoryReducer],(categoriesSlice) => categoriesSlice.categories )

export const selectCategoriesMap = 
createSelector([selectCategories], (categories)=>
  categories.reduce((acc, category)=> {
    const {title, items} = category;
    acc[title.toLowerCase()] = items;
    return acc;
  },{})
)



