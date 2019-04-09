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

Js.log("# ------------- The End.")

