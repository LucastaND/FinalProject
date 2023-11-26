import "./conditionproject.css";

const Condition = () => {
  return (
    <div className="condition">
      <section className="wrapper-cdt">
        <h1 className="title-page">Project Status</h1>
        <div className="cdt-container ">
          <table className="tb-cdt">
            <tr className="r-title">
              <th className="c-title">Project Name</th>
              <th className="c-date">Time</th>
              <th className="c-score"> Score</th>
            </tr>
            <tr className="r-content">
              <th className="c-title">Title</th>
              <th className="c-date">date</th>
              <th className="c-score"> score</th>
            </tr>
            <tr className="r-content">
              <th className="c-title">Title</th>
              <th className="c-date">date</th>
              <th className="c-score"> score</th>
            </tr>
            <tr className="r-content">
              <th className="c-title">Title</th>
              <th className="c-date">date</th>
              <th className="c-score"> score</th>
            </tr>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Condition;
