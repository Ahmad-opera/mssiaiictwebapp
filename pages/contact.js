import Head from 'next/head';

const Contact = () => {
    return ( 
      <>
      <Head>
        <title>MSSIAIICT | Contact Us!</title>
      </Head>
        <header className="pt-40">
          <div className="rounded-lg py-2 m-5 neu-light-static w-5/12 mx-auto bg-white">
          <h1 className="text-center text-2xl lg:text-3xl shadow-none">Contact US</h1>
            <ul className="flex w-3/5 mx-auto">
              <li className="py-2 px-4 neu-light rounded-lg m-2 mx-auto"><i className="fa text-blue-600 fa-2x fa-phone-alt"></i></li>
              <li className="py-2 px-4 neu-light rounded-lg m-2 mx-auto"><i className="fab text-green-400 fa-2x fa-whatsapp"></i></li>
              <li className="py-2 px-4 neu-light rounded-lg m-2 mx-auto"><i className="fab text-blue-300 fa-2x fa-twitter"></i></li>
              <li className="py-2 px-4 neu-light rounded-lg m-2 mx-auto"><i className="fab fa-2x text-gray-400 fa-instagram"></i></li>
            </ul>
        </div>
      </header>
      </>
     );
}
 
export default Contact;