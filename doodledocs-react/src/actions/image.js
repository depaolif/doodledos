export const setImageList = (list) => ({
  type: 'SET_IMAGE_LIST', payload: list
})

export const addImage = (image) => ({
  type: 'ADD_IMAGE', payload: image
})

export const setCurrentImage = (image) => ({
  type: 'SET_CURRENT_IMAGE', payload: image
})

export const removeImage = (image) => ({
  type: 'REMOVE_IMAGE', payload: image
})