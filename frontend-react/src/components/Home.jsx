import Button from "./Button";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center bg-light-dark rounded">
          <h1 className="text-light">Welcome to the Stock Prediction Portal</h1>
          <p className="text-light lead">
            This portal allows you to predict stock prices using advanced
            machine learning algorithms.
          </p>
          <Button text="Login" class="btn-outline-info" url="login" />
        </div>
      </div>
    </>
  );
};

export default Home;
