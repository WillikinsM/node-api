const express = require("express");
const app = express();
const port = 8080;

const myInfo = {
  myName: "Willikins Matheus Gonçalves Abreu",
  myBasic:
    "Hello my name is Willikins, i'm 21 year old and i was born in Florestopolis - PR",
  loremIpsum:
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis ligula quis urna gravida, quis varius libero lacinia. Integer scelerisque maximus nisi vel malesuada. Aenean euismod sem a elit luctus varius.     Nulla in libero eget nisi aliquet auctor. Mauris mattis dui lorem,      non elementum ipsum maximus et. Maecenas eu congue nisi.       Praesent fringilla diam ac sem tristique sagittis. Mauris sed lacinia urna. Vivamus augue ligula, imperdiet eget nisl vel, fringilla suscipit lorem. Morbi non rutrum enim. In ut vulputate dolor, in sollicitudin ante. Donec ut dictum eros, at elementum sem. Donec sagittis libero urna, non ultricies erat commodo ac. Pellentesque sagittis elementum leo, ac gravida ante tempus a. Cras interdum feugiat posuere. Etiam variusconsequat risus, ut laoreet massa cursus vel. Nullam et iaculis ex, ac      viverra nulla. Pellentesque laoreet enim ut lacinia rhoncus. Nulla      blandit ornare auctor. Curabitur quis neque quam. Phasellus sed      porttitor dui. Nulla at dolor tincidunt, dignissim enim rutrum, dapibus      metus. Aliquam mi justo, semper molestie maximus id, auctor non arcu.      Duis quis odio facilisis, aliquet neque sit amet, vehicula tellus.      Aliquam leo arcu, tristique vel pretium sit amet, vestibulum ultrices      eros. Proin vehicula id neque eu congue. Phasellus accumsan metus neque,      eget mattis arcu fringilla sit amet. Aenean luctus cursus quam at      vehicula. Fusce a aliquam velit. Nullam elit dolor, tincidunt eu      vestibulum ac, ornare non neque. Integer eget purus eros. Nullam non purus diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vitae lorem quam. Mauris lacinia sem justo. Sed eu placerat velit, at maximus justo. Phasellus gravida vel diam quis maximus. Praesent libero arcu, scelerisque id est eget, ornare pharetra erat. Nullam quis metus mi. Morbi rutrum lacus quis risus pretium tincidunt. Pellentesque vitae tortor laoreet, faucibus dui in,    scelerisque quam. Sed rhoncus libero libero, in ultrices erat fringilla      vitae. Ut a ornare velit. Nullam gravida in diam eu vulputate. Duis      euismod orci vitae nibh suscipit convallis. Etiam vel neque et massa      pretium ultrices. Phasellus arcu neque, iaculis finibus lobortis vel,      tristique non mauris. Ut auctor rhoncus suscipit. Duis nisl justo, pellentesque a aliquet vel, maximus nec elit. Vivamus porta efficitur ante. In hac habitasse platea dictumst.",
};

const tableData = [
  { name: "Oto Patama", category: "Música", releaseYear: 2020 },
  { name: "The Office", category: "Série", releaseYear: 2005 },
  { name: "The Witcher 3", category: "Jogo", releaseYear: 2015 },
  { name: "Final Fantasy XV", category: "Jogo", releaseYear: 2016 },
  { name: "Fullmetal Alchmist", category: "Anime", releaseYear: 2009 },
  { name: "Closed On Sunday", category: "Música", releaseYear: 2019 },
  { name: "Utopia", category: "Série", releaseYear: 2020 },
  { name: "In My Room", category: "Música", releaseYear: 2019 },
  { name: "Real Compton City G's", category: "Música", releaseYear: 1993 },
  { name: "So Fresh, So Clean", category: "Música", releaseYear: 2000 },
  { name: "Community", category: "Série", releaseYear: 2009 },
  { name: "One Piece", category: "Anime", releaseYear: 1997 },
  { name: "JoJo's Bizarre Adventures", category: "Anime", releaseYear: 2016 },
  { name: "Apex Legends", category: "Jogo", releaseYear: 2019 },
  { name: "Spider-Man", category: "Jogo", releaseYear: 2018 },
  { name: "Mass Effect", category: "Jogo", releaseYear: 2007 },
];

app.use(express.json());

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/infos", (req, res) => {
  res.send(myInfo);
});

app.get("/table", paginate(tableData), (req, res) => {
  res.json(res.paginatedResult);
});

app.post("/table", paginateSort(), (req, res) => {
  res.json(res.paginatedResult);
});

function paginateSort() {
  return (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const sortedData = sort(req.body.order, req.body.sort);

    const result = {};

    result.results = sortedData.slice(startIndex, endIndex);
    res.paginatedResult = result;
    next();
  };
}

function paginate(model) {
  return (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const result = {};

    result.results = model.slice(startIndex, endIndex);
    res.paginatedResult = result;
    next();
  };
}

function sort(order, sort) {
  let sortorder = order;
  let sortingColumn = sort;
  let sortedData = [...tableData];

  sortedData.sort((a, b) => {
    if (a[sortingColumn] < b[sortingColumn]) {
      return sortorder === "asc" ? -1 : 1;
    }
    if (a[sortingColumn] > b[sortingColumn]) {
      return sortorder === "asc" ? 1 : -1;
    }
    return 0;
  });
  return sortedData;
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
