import "./newfeed.css";

const NewFeed = () => {
  return (
    <section className="wrapper-newfeed">
      <h1 className="title-page">Notification</h1>
      <div className="newfeed-container ">
        <table className="tb-notification">
          <tr className="row-title">
            <th className="col-title">News</th>
            <th className="col-date">Time</th>
          </tr>
          <tr className="row-content">
            <th className="col-title">Title</th>
            <th className="col-date">date</th>
          </tr>
          <tr className="row-content">
            <th className="col-title">Title</th>
            <th className="col-date">date</th>
          </tr>
          <tr className="row-content">
            <th className="col-title">Title</th>
            <th className="col-date">date</th>
          </tr>
          <tr className="row-content">
            <th className="col-title">Title</th>
            <th className="col-date">date</th>
          </tr>
          <tr className="row-content">
            <th className="col-title">Title</th>
            <th className="col-date">date</th>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default NewFeed;
