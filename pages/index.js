import Head from 'next/head'

export default function Home() {
  return (
    <>
      <section>
        <header className="lg:pt-20 pt-40">
          <div
            className="flex w-10/12 lg:flex-row flex-cols items-center text-center mx-auto px-5 lg:px-32 pt-12 lg:pt-32"
          >
            <div
              className="justify-center mx-auto items-center w-7/12 lg:w-4/12"
            >
              <img
                src="/img/logo.png"
                alt="Logo"
                className="lg:w-11/12 w-full animated flipInX lg:-ml-10"
              />
            </div>
            <div className="w-full lg:-ml-20 text-center lg:w-7/12">
              <h1
                className="lg:text-5xl text-3xl animated flipInX leading-tight font-bold"
              >
                Muslim Students Society of IAIICT
              </h1>
              <h4 className="lg:text-lg text-sm animated tracking-widest">
                We stand to learn through resilience.
              </h4>
            </div>
          </div>
          <div className="lg:pt-32 hidden lg:block mx-auto w-10 justify-center">
            <i className="fa fa-2x animated delay-3s bounce fa-chevron-down"></i>
          </div>
        </header>
      </section>
      <main className="mainheader lg:-mt-24 text-white pb-40 pt-40">
        <h1 className="text-center text-xl">Our Posts</h1>
        <div className="grid lg:grid-cols-3  text-gray-600 pt-10">
          <div
            className="p-10 mt-5 mx-auto bg-white rounded-lg shadow-xl"
          >
            <h2>Some Text Here!</h2>
          </div>
          <div
            className="p-10 mt-5 mx-auto bg-white rounded-lg shadow-xl"
          >
            <h2>Some Text Here!</h2>
          </div>
          <div
            className="p-10 mt-5 mx-auto bg-white rounded-lg shadow-xl"
          >
            <h2>Some Text Here!</h2>
          </div>
        </div>
      </main>
    </>
  )
}
