// import App from 'next/app'
import '../global.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initState = {
  blogs: ["yow"],
  count: 0
}

const myReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD-BLOG":
      return {...state, blogs: [...state.blogs, action.name]}
    case "ADD-COUNT":
      let count = state.count += 1; 
      return {...state, count}
    default:
      return state
  }
}

let store = createStore(myReducer);

store.subscribe(() => {
  console.log(store.getState())
})

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
