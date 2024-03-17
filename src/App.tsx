import AddLollipopForm from "./AddLollipopForm";
import { GlobalStateProvider } from "./GlobalState";
import LollipopsList from "./LollipopsList";
import "./styles.scss";

function App() {
	return (
		<>
			<GlobalStateProvider>
				<h1>✨🧚 lollipop-fairy 🍭💕</h1>
				<AddLollipopForm />
				<LollipopsList />
			</GlobalStateProvider>
		</>
	);
}

export default App;
