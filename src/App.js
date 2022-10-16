import './App.css';
import CardList from './CardList';
import data from './data.json'

function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {data.totalValue.map((value) => (
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <CardList details={value} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
