import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-10 border-t border-b divide-y">
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                React router
              </a>
              <p className="text-gray-600">11 october 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  What is the purpose of react router
                </p>
              </a>
            </div>
            <p className="text-gray-700">
            React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.
            Adding React Router Components: The main Components of React Router are:
            BrowserRouter: BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL. It is the parent component that is used to store all of the other components.
            Routes: It’s a new component introduced in the v6 and a upgrade of the component. The main advantages of Routes over Switch are:
            Relative s and s
            Routes are chosen based on the best match instead of being traversed in order.
            Route: Route is the conditionally shown component that renders some UI when its path matches the current URL.
            Link: Link component is used to create links to different routes and implement navigation around the application. It works like HTML anchor tag.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                ContextAPI
              </a>
              <p className="text-gray-600">11 october 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                How does ContextAPI works
                </p>
              </a>
            </div>
            <p className="text-gray-700">
            Context API is a kind of new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. Let's see how to use it.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                UseRef Hook
              </a>
              <p className="text-gray-600">11 october 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  How to Work UseRef Hook
                </p>
              </a>
            </div>
            <p className="text-gray-700">
            useRef() hook creates references. Calling const reference = useRef(initialValue) with the initial value returns a special object named reference. The reference object has a property current : you can use this property to read the reference value reference. current , or update reference.In general, we want to let React handle all DOM manipulation.
            But there are some instances where useRef can be used without causing issues.
            In React, we can add a ref attribute to an element to access it directly in the DOM.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Blog;