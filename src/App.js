import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="jumbotron">Alan's language translator</div>

        <div className='container'>
          <div className='col-xs-6'>
            <div className="form-outline">
              <textarea className="form-control special_textarea" id="textAreaExample1" rows="4" placeholder='Translate from'></textarea>
              <select className="form-select" aria-label="Default select example">
                <option selected>Select language</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="ig">Igbo</option>
                <option value="yo">Yoruba</option>
                <option value="ha">Hausa</option>
                <option value="es">Spanish</option>
              </select>
            </div>
          </div>

          <div className='col-xs-6'>
            <div className="form-outline">
              <textarea className="form-control special_textarea" id="textAreaExample2" rows="4" placeholder='Translate to'></textarea>
              <select className="form-select" aria-label="Default select example">
                <option selected>Select language</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="ig">Igbo</option>
                <option value="yo">Yoruba</option>
                <option value="ha">Hausa</option>
                <option value="es">Spanish</option>
              </select>
            </div>
          </div>
        </div>  
        <div className='btn-container container'>
          <button type="button" class="btn btn-info">Translate</button>
        </div>
      </header>
    </div>
  );
}

export default App;
