import Button from "../components/Button";
import { GoBell, GoAlert, GoScreenFull, GoDiamond } from 'react-icons/go';

function ButtonPage() {

    return (<div className="app">
        <div>
            <Button primary className="test">
               <GoBell /> Click me
            </Button>
        </div>
        <div>
            <Button secondary>
              <GoScreenFull />  Buy now
            </Button>
        </div>
        <div>
            <Button success outline rounded>
              <GoDiamond />  Log in
            </Button>
        </div>
        <div>
            <Button warning rounded>
               <GoAlert /> Register
            </Button>
        </div>
        <div>
            <Button danger> Hi there</Button>
        </div>
    </div>);
}

export default ButtonPage;