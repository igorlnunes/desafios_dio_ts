let valorAny: any; //tipo que pode receber qlqr tipo

//má prática de usar --- any ---
valorAny = 3;
valorAny = 'Ola';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny;
