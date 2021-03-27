import MyProvider from './Context/MyProvider.js';
import ProductList from './Components/ProductList';
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
      return (
          <MyProvider>
              <Header />
              <ProductList />
              <Footer />
           </MyProvider>
      );
  };

export default App;
