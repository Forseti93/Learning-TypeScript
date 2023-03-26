import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { Article } from "./components/Article";

type User = {
  id: number;
  name: string;
  email: string;
  password: number;
};

function App() {
  const getUser = (id: number): User => {
    return {} as User;
  };
  return (
    <div className="App">
      <div className="ts-course">
        <h1>TS - developing tool</h1>
        <Article
          summaryTitle={
            <a href="https://youtu.be/30LWjhZzg50?t=3175">
              The link to functions. In details are my interests:
            </a>
          }
          listItems={[
            {
              mainDescription: "Default value for an attribute:",
              codeFormatted: (
                <pre>
                  {`
                  const fun = (name: string = "SERGEY") => {};
                  `}
                </pre>
              ),
              secondaryDescription:
                'Here name can be void or string. if void name will be = "SERGEY"',
            },
            {
              mainDescription: "Never. Error handling",
              codeFormatted: (
                <pre>
                  {`
                  function fail(msg: string): never {; 
                    throw new Error(msg); 
                  };
                  `}
                </pre>
              ),
              secondaryDescription:
                "never terminates execution of the program.",
            },
          ]}
        />
        <Article
          summaryTitle={
            <a href="https://youtu.be/30LWjhZzg50?t=5256">
              Type aliases (Reusable types)
            </a>
          }
          listItems={[
            {
              mainDescription:
                "Types can be used to set the types of everything",
              codeFormatted: (
                <pre>
                  {`type User = {
                id: number;
                name: string;
                email: string;
                password: number;
              };
              
              const getUser = (id: number): User => {
                ...
                return {...} as User;
              };
              `}
                </pre>
              ),
              secondaryDescription: "Don't miss ' = '!",
            },
            {
              mainDescription: "Type extends / expending type",
              codeFormatted: (
                <pre>
                  {`
                  type Animal = {
                    name: string
                  }

                  type Bear = Animal & { 
                    honey: boolean 
                  }
                  `}
                </pre>
              ),
            },
            {
              mainDescription: "A type cannot be changed after being created",
              codeFormatted: (
                <pre>
                  {`
                  type Window = {
                    title: string
                  }
                  
                  type Window = {
                    ts: TypeScriptAPI
                  }

                  // Error: Duplicate identifier 'Window'.
                  `}
                </pre>
              ),
            },
          ]}
        />
        <Article
          summaryTitle={
            <a href="https://youtu.be/30LWjhZzg50?t=5633">Keyword readonly</a>
          }
          listItems={[
            {
              mainDescription: "To prevent changes for a values inside object",
              codeFormatted: (
                <pre>
                  {`
                  type User = {
                    readonly _id: number;
                    email: string;
                  };
                  
                  const user1: User = {
                    _id: 1,
                    email: 1@1.com
                  };
                  
                  user1._id = 2 //error with TS
                  `}
                </pre>
              ),
            },
          ]}
        />

        <Article
          summaryTitle={
            <a href="https://youtu.be/30LWjhZzg50?t=7207">Arrays and unions</a>
          }
          listItems={[
            {
              mainDescription:
                "To write an array with number and string elements",
              codeFormatted: (
                <pre>
                  {`
                  const arr: (string | number)[] = ["1", 2, "3"]
                  `}
                </pre>
              ),
            },
          ]}
        />
        <Article
          summaryTitle={
            <a href="https://youtu.be/30LWjhZzg50?t=7642">Tuples</a>
          }
          listItems={[
            {
              mainDescription: "To give a special order of types for an array",
              codeFormatted: (
                <pre>
                  {`
          const person: [string, number, string] = ["Sergey", 29, "React developer"]
          `}
                </pre>
              ),
            },
          ]}
        />
        <Article
          summaryTitle={<a href="https://youtu.be/30LWjhZzg50?t=8132">ENums</a>}
          listItems={[
            {
              mainDescription: "To work with ordered numbers. or any variables",
              codeFormatted: (
                <pre>
                  {`
                  Here JS output is big and ugly (same +2 lines)
                  enum PhonesIds {
                    ASUS,               // 0
                    APPLE,              // 1
                    MOTOROLLA = 10,     // 10
                    DOOGEE,             // 11
                    SAMSUNG = "good",   // "good"
                    Xiaomi,             // error, because a pattern is broken with a string
                    Xiaomi = 20,        // OK, count will be from 20
                  }

                  const selectedPhoneId = PhonesIds.ASUS // selectedPhoneId === 0
                  `}
                </pre>
              ),
            },
            {
              mainDescription: "To work with ordered numbers. or any variables",
              codeFormatted: (
                <pre>
                  {`
              Here JS output is only 3 lines // const MOTOROLLA, SAMSUNG, Xiaomi, 
              const enum PhonesIds {
                ASUS,               // 0
                APPLE,              // 1
                MOTOROLLA = 10,     // 10
                DOOGEE,             // 11
                SAMSUNG = "good",   // "good"
                Xiaomi,             // error, because a pattern is broken with a string
                Xiaomi = 20,        // OK, count will be from 20
              }

              const selectedPhoneId = PhonesIds.ASUS // selectedPhoneId === 0
              `}
                </pre>
              ),
            },
          ]}
        />
        <Article
          summaryTitle={
            <a href="https://youtu.be/30LWjhZzg50?t=8727">Interfaces</a>
          }
          listItems={[
            {
              mainDescription: "Syntax",
              codeFormatted: (
                <pre>
                  {`
              interface IUser {
                readonly dbId: number,
                googleId?: number,
                trialStarted(): string, // trialStarted: () => string,
                email: string,
                getCoupon(couponName: string): number
              }

              const sergey: IUser = {
                dbId = 0, 
                trialStarted = () => { return Date.now() },
                email: serj@gmail.com
              }
            `}
                </pre>
              ),
            },
            {
              mainDescription:
                'Interfaces can be "re-open", it just adds new values for a interface',
              codeFormatted: (
                <pre>
                  {`
                  interface User {name: \"sergey\"};
                  interface User {lastName: 'lavr'};
                  const firstUser: User = ... ;
                    //will have type {name: \"sergey\", lastName: 'lavr'}
                  `}
                </pre>
              ),
            },
            {
              mainDescription: 'Inheritance inheritance via keyword "extends"',
              codeFormatted: (
                <pre>
                  {`
                  interface Admin extends User {
                    role:'admin' | 'staff' | 'user'
                  }
                `}
                </pre>
              ),
            },
          ]}
        />
        <Article
          summaryTitle={
            <a href="https://youtu.be/30LWjhZzg50?t=9272">
              Interfaces vs types
            </a>
          }
          listItems={[
            {
              mainDescription: "All other differences are here:",
              link: (
                <a href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces:~:text=typed%20type%20system.-,Differences%20Between%20Type%20Aliases%20and%20Interfaces,-Type%20aliases%20and">
                  Differences Between Type Aliases and Interfaces
                </a>
              ),
            },
          ]}
        />
        <Article
          summaryTitle={
            <a href="https://youtu.be/30LWjhZzg50?t=10589">Classes</a>
          }
          listItems={[
            {
              mainDescription: "General syntax",
              codeFormatted: (
                <pre>
                  {`
                  class User {
                    email: string                 // that is a type for this.email
                    name: string                  // that is a type for this.email
                    languages: string = ""        // language is optional, but that value will be accessible in created instances
                    readonly dbId: number = 10    // to add that by default and reject changing
                    constructor (email: string, name:string){
                      this.email = email;
                      this.name = name;
                    }
                  }

                  const serj = new User("serj@mail.com", "sergey")
                  `}
                </pre>
              ),
            },
            {
              mainDescription: "Type modifiers for a class\nPrivate / Public",
              codeFormatted: (
                <pre>
                  {`
                    private email: string   // you can't access from a TS app, but can from JS
                    #email: string          // that is a JS way to be private.
                    public name: string     // by default all unmarked with modifiers are public
                  `}
                </pre>
              ),
            },
            {
              mainDescription: "A compact way for typing classes:",
              codeFormatted: (
                <pre>
                  {`
                  readonly dbId: number = 10
                  class User {
                    constructor (
                      private email: string, 
                      public name:string,
                      ){ }
                  }
                  `}
                </pre>
              ),
              secondaryDescription:
                "JS will get the same code as a long declaration in the 1st example",
            },
            {
              mainDescription: "getters and setters",
              codeFormatted: (
                <pre>
                  {`
                  private _courseCount = 1

                  readonly dbId: number = 10
                  class User {
                    constructor (
                      private email: string, 
                      public name:string,
                      ){ }

                    get getExampleEmail(): string {
                      return \`Example: \${this.email}\`
                    }

                    get courseCount(): number {
                      return this._courseCount
                    }

                    //setters should not return anything, even void is wrong
                    set courseCount(courseNum: number) {
                      //to check before set new value
                      if(courseNum <= 1) {        
                        throw new Error("Course number must be 2 or more")
                      }
                      this._courseCount = courseNum
                    }
                  }
                  `}
                </pre>
              ),
              link: (
                <a href="https://www.typescriptlang.org/docs/handbook/2/classes.html#getters--setters">
                  TS docs
                </a>
              ),
              secondaryDescription:
                "A video: https://youtu.be/30LWjhZzg50?t=11299",
            },
            {
              mainDescription: "protected - to share between child classes",
              codeFormatted: (
                <pre>
                  {`
                  protected _age: number     // that is inside a User class

                  class SharedUser extends User {
                      this._age = 10
                  }
                  `}
                </pre>
              ),
              link: (
                <a href="https://www.typescriptlang.org/docs/handbook/2/classes.html#class-members:~:text=style/readability%20reasons.-,protected,-protected%20members%20are">
                  TS site - protected
                </a>
              ),
            },
            {
              mainDescription: "Way to override a method",
              link: (
                <a href="https://www.typescriptlang.org/docs/handbook/2/classes.html#class-members:~:text=a%20legal%20way-,to%20override%20a%20method,-%3A">
                  TS docs
                </a>
              ),
            },
          ]}
        />
        <Article
          summaryTitle={
            <a href="https://youtu.be/30LWjhZzg50?t=12291">
              Interfaces for classes
            </a>
          }
          listItems={[
            {
              mainDescription: "class extends interfaces",
              codeFormatted: (
                <pre>
                  {`
              interface TakePhoto {
                cameraMode: string
                filter: string
                burst: number
              }

              interface Story {
                createStory(): number
              }

              class Instagram implements TakePhoto, Story {
                constructor(
                  public cameraMode: string
                  public filter: string
                  public burst: number
                  ) { }
                  
                public createStory(): number {
                  return 2+2
                }
              }
              `}
                </pre>
              ),
            },
          ]}
        />
        <Article
          summaryTitle={
            <a href="https://youtu.be/30LWjhZzg50?t=12926">Abstract class</a>
          }
          listItems={[
            {
              mainDescription: "Syntax and features",
              codeFormatted: (
                <pre>
                  {`
              abstract class TakePhoto{
                constructor (
                  public cameraFilter: string     //marked with an "abstract" will be required in child class
                  public cameraMode: string
                ){}
              
                abstract getDate():string    // to indicate "do getDate() method with string return"

                abstract getSepia():void {  
                  console.log("sepia")
                }

                photoId(): number {     //that will be in every child class
                  console.log("photo id")
                }
              }

              class Instagram extends TakePhoto {
                constructor(
                  cameraFilter: string
                  cameraMode: string      // two from TakePhoto
                  date: string    // one extra variable
                ) {
                    super(cameraFilter, cameraMode)
                }
                
                getDate():string 
                getSepia(): void {...}
              }

              const app = new Instagram("filter", "mode", "24-03-2023") 
              app.photoId()  // comes from TakePhoto
              `}
                </pre>
              ),
              secondaryDescription:
                "abstract class can't be used for an object creation",
              link: (
                <a href="https://www.typescriptlang.org/docs/handbook/2/classes.html#class-members:~:text=TypeScript%20may%20be-,abstract,-.">
                  TS site
                </a>
              ),
            },
          ]}
        />
        <Article
          summaryTitle={
            <a href="https://youtu.be/30LWjhZzg50?t=14568">Generics</a>
          }
          listItems={[
            {
              mainDescription:
                "Example 'Selling quizzes and courses.' OOP style",
              codeFormatted: (
                <pre>
                  {`
                  interface Quizz {
                    name: string
                    questions: {
                        question: string,
                        answers: [
                            var1: string,
                            var2: string,
                            var3: string,
                            var4: string
                        ]
                    }[]
                  }

                  interface Course {
                      name: string
                      topics: {
                          name: string,
                      
                      }[]
                  }

                  class Sellable<T>{
                      public cart: T[] = []
                  
                      addToCart(product: T) {
                          this.cart.push(product)
                          console.log(this.cart)
                      }
                  }

                  const course: Course = {
                      name: "TS",
                      topics: [{
                          name: "Generics",
                      }]
                  }

                  const courseTS = new Sellable<Course>()
                  courseTS.addToCart(course)
              `}
                </pre>
              ),
              secondaryDescription:
                "const courseTS: Course = new Sellable\ncourseTS.addToCart(courseId)",
            },
          ]}
        />

        <Article
          summaryTitle={
            <a href="https://youtu.be/30LWjhZzg50?t=14990">Narrowing</a>
          }
          listItems={[
            {
              mainDescription:
                "By the logic it is something like switch. Example:",
              codeFormatted: (
                <pre>
                  {`
                    function padLeft(padding: number | string, input: string) {
                      if (typeof padding === "number") {
                        return " ".repeat(padding) + input;
                      }
                      return padding + input;
                    }
                  `}
                </pre>
              ),
              link: (
                <a href="https://www.typescriptlang.org/docs/handbook/2/narrowing.html#:~:text=so%20in%20our-,examples,-.">
                  TS docs
                </a>
              ),
            },
            {
              mainDescription: "The 'in' operator",
              codeFormatted: (
                <pre>
                  {`
                  type Fish = { swim: () => void };
                  type Bird = { fly: () => void };
                   
                  function move(animal: Fish | Bird) {
                    if ("swim" in animal) {
                      return animal.swim();
                    }
                   
                    return animal.fly();
                  }
                  `}
                </pre>
              ),
              secondaryDescription:
                "move() checks, does the object 'animal' contain the key 'swim'.\nUse it with interfaces or types also",
            },
            {
              mainDescription: "The 'instanceof' operator",
              codeFormatted: (
                <pre>
                  {`
                  function logValue(x: Date | string) {
                    if (x instanceof Date) {
                      console.log(x.toUTCString());
                    } else {
                      console.log(x.toUpperCase());
                    }
                  }
                  `}
                </pre>
              ),
              secondaryDescription:
                "logValue() checks, does the object 'x' have Date in prototype.\nUse it with interfaces or types also",
            },
            {
              mainDescription: "'is' and 'as' operators. Type predicates",
              codeFormatted: (
                <pre>
                  {`
                  function isFish(pet: Fish | Bird): pet is Fish {
                    return (pet as Fish).swim !== undefined;
                  }

                  // Both calls to 'swim' and 'fly' are now okay.
                  let pet = getSmallPet();

                  if (isFish(pet)) {
                    pet.swim();
                  } else {
                    pet.fly();
                  }
                  `}
                </pre>
              ),
              link: (
                <a href="https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates:~:text=Try-,Using%20type%20predicates,-We%E2%80%99ve%20worked%20with">
                  TS docs
                </a>
              ),
              secondaryDescription:
                "logValue() checks, does the object 'x' have Date in prototype.\nUse it with interfaces or types also",
            },
          ]}
        />
        <Article
          summaryTitle={
            <a href="https://youtu.be/30LWjhZzg50?t=16882">
              Exhaustiveness checking
            </a>
          }
          listItems={[
            {
              mainDescription:
                "To check all cases for possible key values in a function attributes",
              codeFormatted: (
                <pre>
                  {`
                    type Shape = Circle | Square | Rectangle;  // Every has key:value pair like a: kind: "circle"
 
                    function getArea(shape: Shape) {
                      switch (shape.kind) {
                        case "circle":
                          return Math.PI * shape.radius ** 2;
                        case "square":
                          return shape.sideLength ** 2;
                        default:
                          const _exhaustiveCheck: never = shape;  // That will break the app until you will add a case for a shape.kind === "rectangle"
                          return _exhaustiveCheck;
                      }
                    }
                  `}
                </pre>
              ),
              link: (
                <a href="https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking:~:text=which%20shouldn%E2%80%99t%20exist.-,Exhaustiveness%20checking,-The%20never%20type">
                  TS docs
                </a>
              ),
            },
          ]}
        />
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
