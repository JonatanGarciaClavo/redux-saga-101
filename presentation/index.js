// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  S
} from "spectacle";

// Import CodeSlide
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  reduxSagaLogo: require("../assets/redux-saga-logo.png"),
  wat: require("../assets/wat.jpg"),
  what: require("../assets/what.jpg"),
  sagaFlow: require("../assets/saga-flow.png"),
  magic: require("../assets/magic.gif")
};

preloader(images);

const bgIntroColor = "white";
const bgColor = "#222222";

const theme = createTheme({
  primary: "#F49E00",
  secundary: "white"
}, {
  primary: "labbold",
  secundary: "montserratregular",
  tertiary: "montserratbold"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor={bgIntroColor}>
            <Image width="95%" src={images.reduxSagaLogo.replace("/", "")}/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Summary
            </Heading>
            <List>
              <Appear><ListItem textFont="secundary" textColor="secundary">What is saga pattern?</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">What is generators?</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">What is effects?</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Examples</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Testing</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Why redux saga?</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              What is saga pattern?
            </Heading>
            <Appear><Image src={images.wat.replace("/", "")} margin="0px auto 40px" height="600px"/></Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              What is saga pattern?
            </Heading>
            <List>
              <Appear><ListItem textFont="secundary" textColor="secundary">Written by Hector Garcia-Molina in 1987</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Distribution of multiple workflows across multiple systems</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Pattern was designed to handle these failures</ListItem></Appear>
            </List>
            <Appear><Image src={images.sagaFlow.replace("/", "")} margin="0px auto 40px" height="250px"/></Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              What is saga pattern?
            </Heading>
            <Text style={{margin: "3em 0"}} textAlign="justify" textFont="secundary" textColor="secundary">A Saga is a set of rules for routing a job to multiple collaborating parties, and allowing these parties to backtrack and/or take corrective action in the case of failure.</Text>
            <Link href="http://kellabyte.com/2012/05/30/clarifying-the-saga-pattern/">
              <Text padding="10px 0 0 0" italic textFont="tertiary" textColor="secundary">More saga pattern info</Text>
            </Link>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              What is generators?
            </Heading>
            <Appear><Image src={images.what.replace("/", "")} margin="0px auto 40px" height="600px"/></Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              What is generators?
            </Heading>
             <List>
              <Appear><ListItem textFont="secundary" textColor="secundary">Way to handle async code</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">JS functions that returs a generator object when it is called</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Starts "pause"</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary"><S type="italic">yield</S> keyword</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Function body execution pauses on <S type="italic">yield</S></ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Generator iterator <S type="italic">next()</S></ListItem></Appear>
            </List>
            <Link href="https://davidwalsh.name/es6-generators">
              <Text padding="10px 0 0 0" italic textFont="tertiary" textColor="secundary">More generators info</Text>
            </Link>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Generator syntax
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/generator-syntax.example")}
              margin="5em auto"
              textSize="0.9em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Generator example
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/generator-example.example")}
              margin="2em auto"
              textSize="0.7em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              What is effects?
            </Heading>
            <Appear><Image src={images.magic.replace("/", "")} margin="0px auto 40px" height="600px"/></Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              What is effects?
            </Heading>
             <List>
              <Appear><ListItem textFont="secundary" textColor="secundary">JS Objects</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">We yield plain JS Objects from the Generator</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Instructions to the middleware to perform some operation</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary"><S type="italic">redux-saga/effects</S> package</ListItem></Appear>
            </List>
            <Link href="https://yelouafi.github.io/redux-saga/docs/basics/DeclarativeEffects.html">
              <Text padding="10px 0 0 0" italic textFont="tertiary" textColor="secundary">More effects info</Text>
            </Link>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              What is effects?
            </Heading>
             <List>
              <Appear><ListItem textFont="secundary" textColor="secundary"><S type="italic">take</S> - to wait for a specified action </ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary"><S type="italic">call</S> - for calling async</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary"><S type="italic">put</S> - for dispatching actions</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary"><S type="italic">select</S> - for quering state</ListItem></Appear>
            </List>
            <Link href="https://yelouafi.github.io/redux-saga/docs/api/index.html">
              <Text padding="10px 0 0 0" italic textFont="tertiary" textColor="secundary">API Reference</Text>
            </Link>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Redux saga list example
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/list.example")}
              margin="2em auto"
              textSize="0.55em"
            />
          </Slide>
          <CodeSlide
            transition={["zoom", "fade"]}
            lang="js"
            code={require("raw!../assets/list.example")}
            ranges={[
              { loc: [16, 21], note: "Wait for REQUEST_CONTACT_LIST action"},
              { loc: [7, 15] },
              { loc: [9, 10], note: "Call list service"},
              { loc: [10, 11], note: "Dispatch action with list data"},
              { loc: [12, 13], note: "Error handler"},
              { loc: [7, 15] }
            ]}
          />
        <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Redux saga update example
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/save.example")}
              margin="2em auto"
              textSize="0.55em"
            />
          </Slide>
          <CodeSlide
            transition={["zoom", "fade"]}
            lang="js"
            code={require("raw!../assets/save.example")}
            ranges={[
              { loc: [16, 22], note: "Wait for REQUEST_SAVE_CONTACT action"},
              { loc: [2, 3], note: "Dispatch action to validate data before send"},
              { loc: [3, 4], note: "Pick data and errors from state"},
              { loc: [4, 5], note: "Check errors"},
              { loc: [6, 7], note: "Call create/update service"},
              { loc: [7, 8], note: "Call push to transition to list view"}
            ]}
          />
        <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Test list example
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/test-list.example")}
              textSize="0.65em"
            />
          </Slide>
          <CodeSlide
            transition={["zoom", "fade"]}
            lang="js"
            code={require("raw!../assets/test-list.example")}
            ranges={[
              { loc: [2, 3], note: "Initialize generator"},
              { loc: [3, 8], note: "Check call effect and mock service response"},
              { loc: [8, 14], note: "Check response success action is triggered with mocked data"},
              { loc: [14, 17], note: "Check there is any other function to be handled"}
            ]}
          />
        <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Test list example
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/test-save.example")}
              textSize="0.55em"
            />
          </Slide>
          <CodeSlide
            transition={["zoom", "fade"]}
            lang="js"
            code={require("raw!../assets/test-save.example")}
            ranges={[
              { loc: [2, 3], note: "Initialize generator"},
              { loc: [3, 6], note: "Check validate action is triggered"},
              { loc: [6, 13], note: "Check select state data and return data selected"},
              { loc: [13, 18], note: "Check call effect and mock save service"},
              { loc: [18, 21], note: "Check call effect to transition to list"},
              { loc: [21, 24], note: "Check there is any other function to be handled"}
            ]}
          />
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Why redux saga?
            </Heading>
            <List>
              <Appear><ListItem margin="0.3em" textSize="1em" textFont="secundary" textColor="secundary"><S type="italic">Declarative effects:</S> all operations in redux-saga yield plain Javascript objects, which makes it easier to test the business logic</ListItem></Appear>
              <Appear><ListItem margin="0.3em" textSize="1em" textFont="secundary" textColor="secundary"><S type="italic">Advanced async control flow :</S> simply describe async flow with sync style and familiar control flow constructs</ListItem></Appear>
              <Appear><ListItem margin="0.3em" textSize="1em" textFont="secundary" textColor="secundary"><S type="italic">Concurrency management :</S> provide primitives and operators to manage concurrency between tasks; able to fork multiple background tasks in parallel and cancel a running task</ListItem></Appear>
              <Appear><ListItem margin="0.3em" textSize="1em" textFont="secundary" textColor="secundary"><S type="italic">Side effect handler :</S> all side effects are moved into sagas, UI components do not perform any business logic but only dispatch actions to notify what happened</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Questions?
            </Heading>
            <Link href="https://github.com/JonatanGarciaClavo/redux-saga-101">
              <Text padding="100px 0 0 0" italic textSize="1.2em" textFont="montserratregular" textColor="tertiary">Slides: https://github.com/JonatanGarciaClavo/redux-saga-101</Text>
            </Link>
            <Link href="https://github.com/JonatanGarciaClavo/ContactsApp">
              <Text padding="50px 0 0 0" italic textSize="1.2em" textFont="montserratregular" textColor="tertiary">Example project: https://github.com/JonatanGarciaClavo/ContactsApp.git</Text>
            </Link>
            <Link href="mailto:jonatan.garcia@mobgen.com">
              <Text padding="50px 0 0 0" italic textSize="1.2em" textFont="montserratregular" textColor="tertiary">Email: jonatan.garcia@mobgen.com</Text>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
