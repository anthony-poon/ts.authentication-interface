import React from "react";
import { useContext } from 'react';
import { BreadcrumbContext, BreadcrumbContextProvider } from '@component/url/BreadcrumbContext';
import { Meta, StoryObj } from '@storybook/react';
import { Link, Route, Routes } from 'react-router';
import { BreadcrumbMap, URLLabelMap, URLMap } from '@component/url/type';
import { Breadcrumb } from '@component/url/Breadcrumb';

const urls: URLMap = {
  home: "/home",
  books: "/books",
  book_detail: "/books/:id",
  no_breadcrumb: "/no_breadcrumb",
  no_label: "/no_label",
};

const labels: URLLabelMap<typeof urls> = {
  home: "Home",
  books: "Books",
  book_detail: "Book Detail",
  no_breadcrumb: "No breadcrumb",
};

const crumbs: BreadcrumbMap<typeof urls> = {
  home: [],
  book_detail: ["home", "books"],
  books: ["home"],
  no_label: [],
};


const Render = () => {
  return (
    <>
      <Breadcrumb/>
      <ul>
        <li>
          <Link to={urls.home}>Home</Link>
        </li>
        <li>
          <Link to={urls.books}>Books</Link>
        </li>
        <li>
          <Link to={urls.book_detail.replace(":id", "1")}>Book one</Link>
        </li>
        <li>
          <Link to={urls.no_breadcrumb}>No breadcrumb</Link>
        </li>
        <li>
          <Link to={urls.no_label}>No Label</Link>
        </li>
      </ul>
    </>
  );
};


export default {
  title: "Component/URL",
  component: Render,
  render: () => {
    return (
      <BreadcrumbContextProvider
        urls={urls}
        labels={labels}
        breadcrumbs={crumbs}
      >
        <Render />
        <Routes>
          <Route path={urls.home} element={<>Home</>}/>
          <Route path={urls.books} element={<>Book</>}/>
          <Route path={urls.book_detail} element={<>Book Detail</>}/>
          <Route path={urls.no_breadcrumb} element={<>No breadcrumb</>}/>
          <Route path={urls.no_label} element={<>No Label</>}/>
        </Routes>
      </BreadcrumbContextProvider>
    )
  }
} as Meta<typeof Render>;

export const Default: StoryObj<typeof Render> = {
  name: "Breadcrumb",
};