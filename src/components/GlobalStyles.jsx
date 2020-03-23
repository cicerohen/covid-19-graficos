import { createGlobalStyle } from "styled-components";

import UbuntuRegular from "../assets/fonts/Ubuntu/Ubuntu-Regular.ttf";

const GlobalStyles = createGlobalStyle`
	@font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuRegular}); format("ttf");
	};
	html {
		font-size: "62.5%" 
	}
	body {
		font-family: Ubuntu;
		padding: 0;
    margin: 0;
    color: #333;
	};
`;

export default GlobalStyles;
