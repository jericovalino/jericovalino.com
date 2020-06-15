// import App from 'next/app'
import '../global.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initState = {
  showAlert: false,
  title: "",
  body: ""
}

const alertReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW-ALERT":
      return { ...state, showAlert: true, title: action.title, body: action.body }
    case "HIDE-ALERT":
      return { ...state, showAlert: false, title: "", body: "" }
    default:
      return state
  }
}

let store = createStore(alertReducer);

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
