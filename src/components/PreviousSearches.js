import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function PreviousSearches() {

    return (
        <div className="previous-searches section">
            <div className="search-box">
                <input type="text" placeholder="Search..." className="input" />
                <button className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}