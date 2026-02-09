import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6989488ec04d974bc69ecddb.mockapi.io'}),


  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => ({
        url: '/blogs',
        method: 'GET',
      })
    }),


    addBlog: builder.mutation({
      query: (data) => ({
        url: '/blogs',
        body: data,
        method: 'POST',
      })

    })

  })

});
export const { useGetBlogsQuery, useLazyGetBlogsQuery, useAddBlogMutation } = blogApi;