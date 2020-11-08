import * as Yup from 'yup';

export type Product = {
  id: string,
  title: string,
  description: string,
  price: number,
  count: number,
  published: string,
  edition: number,
  publisher: string,
  authors: string[],
  cover_url: string,
  rating: number
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  count: Yup.number().required().positive().integer(),
  description: Yup.string(),
  price: Yup.number().required().positive(),
  published: Yup.string(),
  edition: Yup.number().positive().integer(),
  publisher: Yup.string(),
  authors: Yup.array().of(Yup.string()),
  cover_url: Yup.string(),
  rating: Yup.number().positive()
})
