import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import Header from './Header';
import './App.css';

function App() {

  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const [beforeText, setBeforeText] = useState('');
  const [beforeSelector, setBeforeSelector] = useState('');
  const [toSelector, setToSelector] = useState('');

  const handleSubmit = ()=> {
    setLoading(true);
    const body = {
      'text': beforeText,
      'from': beforeSelector,
      'to': toSelector
    }
    axios.post('https://alan-translator-api.herokuapp.com/translate', body)
      .then((result) => {        
        const value = result.data.text;
        setText(value);
        console.log(result);
        setLoading(false);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        { loading ? (<Spinner animation="border" className="_spinner" />) : '' }
        <Header />

        <div className='container'>
          <div className='col-xs-6'>
            <div className="form-outline">
              <textarea className="form-control special_textarea" id="textAreaExample1" rows="4" placeholder='Translate from' onChange={(e) => setBeforeText(e.target.value)}></textarea>
              <select className="form-select" aria-label="Default select example" id="fromSelector" onChange={(e) => setBeforeSelector(e.target.value)}>
                <option>Select language</option>
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
              <textarea className="form-control special_textarea" id="textAreaExample2" rows="4" placeholder='Translate to' value={text} readOnly></textarea>
              <select className="form-select" aria-label="Default select example" id="toSelector" onChange={(e) => setToSelector(e.target.value)}>
                <option>Select language</option>
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
          <button onClick={handleSubmit}type="button" className="btn btn-info">Translate</button>
        </div>
      </header>
    </div>
  );
}

export default App;
