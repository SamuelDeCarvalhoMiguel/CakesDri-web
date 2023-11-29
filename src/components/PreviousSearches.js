import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function PreviousSearches() {
    const searches = ['bolo 1', 'doce 1', 'recheio 1', 'panetone 1']


    return (
        <div className="previous-searches section">
            <h2 className="h2">Previous Searches</h2>
            <div className="previous-searches-container">
                {searches.map(search => (<div className="search-item">
                    {search}
                </div>))}
            </div>
            <div className="search-box">
                <input type="text" placeholder="search ..." className="input" />
                <button className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )

}