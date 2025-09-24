/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 */

/**
 * @typedef {Object} Recipe
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string[]} ingredients
 * @property {string} instructions
 * @property {number} prepTime
 * @property {number} cookTime
 * @property {string} [imageUrl]
 * @property {string} authorId
 * @property {Review[]} [reviews]
 */

/**
 * @typedef {Object} Review
 * @property {string} id
 * @property {number} rating
 * @property {string} comment
 * @property {string} authorId
 * @property {string} recipeId
 */
