import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.fullImageBg}>
        <div className="flex flex-col content-end justify-center h-full w-full bg-black bg-opacity-50 flex-wrap">
          <div className="flex flex-col w-3/6 m-10">
            <h1 className="mb-10 text-4xl font-black text-white w-[500px]">
              NATURAL COLLECTION PHOTOGRAPHY
            </h1>
            <p
              className={
                "font-inria-serif text-3xl font-light text-white italic leading-10"
              }
            >
              Explore the world with us through the lens of our cameras, as we
              seek to learn more about the stories that nature tells us.{" "}
            </p>
            <button className="flex px-5 py-2 ml-auto rounded-full text-white bg-white bg-opacity-20 mt-10 font-bold justify-end hover:cursor-pointer hover:bg-opacity-25">
              Enter Gallery
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
