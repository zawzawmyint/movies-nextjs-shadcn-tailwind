import NextTopLoader from "nextjs-toploader";

const NextjsLoading = () => {
  return (
    <NextTopLoader
      color="#FFA500"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px #FFA500,0 0 5px #FFA500"
      template='<div class="bar" role="bar">
      <div class="peg"></div>
      </div> 
                 <div class="spinner" role="spinner">
                 <div class="spinner-icon"></div></div>'
      zIndex={1600}
      showAtBottom={false}
    />
  );
};

export default NextjsLoading;
