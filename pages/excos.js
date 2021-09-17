import Head from 'next/head';

const Contact = () => {
    return ( 
      <>
      <Head>
        <title>MSSIAIICT | Excos!</title>
      </Head>
      <header className="lg:pt-40 lg:px-8">
        <div className="lg:p-24 min-h-screen px-8 lg:pt-16 pt-24 rounded-lg h-max bg-white bg-opacity-70 lg:px-24">
            <h1 className="text-3xl">Excos Page</h1>
            <p className="text-[#7d7d81] text-sm font-normal pt-6">This page lists the past and present Executives of MSS IAIICT from 2018 upwards, this is only because the website hasn't been built till 2020 by the set of 2018/19 students</p>
            <div className="py-6">
              <div className="px-12 py-8 lg:w-full flex divide-x-2 items-center border-l-4 transition duration-500 border-transparent hover:border-green-500 rounded-lg shadow-lg">
                <div className="flex w-full  items-center">
                  <div className="w-32 rounded-full h-32 bg-gray-200"></div>
                  <div className="px-4">
                    <h1 className="font-semibold lg:text-2xl text-lg">Yakubu M. Yakubu</h1>
                    <p className="text-gray-400 text-lg">Naqeeb</p>
                    <h2 className="text-gray-400">2018-2021</h2>
                  </div>
                </div>
                <div className="w-full px-6">
                    <h1 className="font-semibold text-lg">Main Achievements</h1>
                    <ul className="list-disc pl-8 pb-4">
                      <li>Official Website</li>
                      <li>Tutorials Web App</li>
                      <li>Membership Web App</li>
                      <li>Funding Management Sys</li>
                    </ul>
                    <button className="px-6 w-full text-sm py-2 bg-indigo-600 text-white rounded-full shadow">Read More</button>
                </div>
              </div>
            </div>
        </div>
      </header>
      </>
     );
}
 
export default Contact;