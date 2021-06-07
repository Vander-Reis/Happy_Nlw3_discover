const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async function (db) {
 /* await saveOrphanage(db, {
    // inserir dados na tabela
    lat: "-19.1687518",
    lng: " -47.6746796",
    name: "Lar dos meninas",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "034992586080",
    images: [
      "https://images.unsplash.com/photo-1573449595343-f5e436ae1091?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "http://dreamkids.com.br/wp-content/uploads/2019/06/crian%C3%A7as-brincando2-1024x726.png"
    ].toString(),
    instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas das 18h até 8h",
    open_on_weekends: "1",
  }); */

   // consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // consultar somente 1 orphanato , pelo id
  //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "0"');
  //console.log(orphanage);

  // deletar dado da tabelas

 // console.log(await db.run("DELETE FROM orphanages"))
 //console.log(await db.run("DELETE FROM orphanages WHERE id = '1'"))
 //console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"))

});
