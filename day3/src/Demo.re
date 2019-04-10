Js.log("# ------------- About timeouts")

type tim_id;
[@bs.val] external setTimeout : (unit => unit, int) => tim_id = "setTimeout";
[@bs.val] external clearTimeout : tim_id => unit = "clearTimeout";

let t = setTimeout( ()=>Js.log("Timeout occured! - from a raw javascript"), 3000);
//clearTimeout(t); //<- to STOP the alert

Js.log("# ------------- About bs.scope")

[@bs.scope ("window", "location", "ancestorOrigins")] [@bs.val]
external len: int  = "length";

Js.log("Length of ancestorOrigins = " ++ string_of_int(len) );

Js.log("# ------------- About random")

[@bs.scope "Math"] [@bs.val] external random : unit => float = "random";
let rand_val = random();
Js.log("Random value = " ++ Js.Float.toString(rand_val));

//let x = Js.Dict.empty();

Js.log("# ------------- About modules")

[@bs.module "../src/SomeModule.bs"] external some_id_of_some_m : float = "some_id";
Js.log("Some id = " ++ Js.Float.toString(some_id_of_some_m));

Js.log("# ------------- About dict")

let some_map = Js.Dict.empty();
Js.Dict.set(some_map, "John", 66);
Js.log(some_map);


Js.log("# ------------- About external.js")

[@bs.module "../external_js"] external eid: Js.Nullable.t(float) = "eid";
switch (Js.Nullable.toOption(eid)) {
    | None => Js.log("eid not found")
    | Some(x) => Js.log("eid = " ++ Js.Float.toString(x))
    }; 
   


//[@bs.scope "external_js"] [@bs.val] external peopleAge: Js.Dict.t(int)  = "peopleAge";
[@bs.module "../external_js"] external peopleAge: Js.Dict.t(int) = "";
//Js.log( "get age = " ++ Js.Dict.get( peopleAge, "John"));
switch (Js.Dict.get(peopleAge, "John")) {
    | None => Js.log("John can't be found")
    | Some(age) => Js.log("John is " ++ string_of_int(age))
    };
    
Js.log("# ------------- About objects")

type person = {
    name: string, 
    age: int,
};
[@bs.module "../external_js"] [@bs.val] external getPerson : unit=>person = "";

//[@bs.val] external getPerson: unit=>person = "";
Js.log(getPerson())













Js.log("# ------------- The End.")





