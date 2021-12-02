const express = require("express");
const { default: upload } = require("./config/upload");
const { default: uploadController } = require("./controllers/uploadController");
const app = express();
const port = 3000;

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

const contactMsg = [
  {
    timestamp: "2021/11/24 10:35:45",
    self: false,
    type: "text",
    id: 1,
    user: "Willikins Abreu",
    content: "Aliquip adipisicing commodo ex incididunt officia mollit.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/24 10:57:08",
    self: true,
    type: "text",
    id: 2,
    user: "Nellie",
    content: "Eiusmod adipisicing nisi do est duis.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/23 23:29:28",
    self: true,
    type: "text",
    id: 3,
    user: "Briggs",
    content:
      "Quis voluptate cupidatat qui enim ipsum voluptate eu cupidatat est aute.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/24 05:34:46",
    self: true,
    type: "text",
    id: 3,
    user: "Briggs",
    content:
      "Incididunt et do deserunt quis id id enim do incididunt minim cupidatat.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/23 05:14:38",
    self: true,
    type: "text",
    id: 3,
    user: "Briggs",
    content: "Occaecat aute enim officia ad enim fugiat reprehenderit nostrud.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/25 05:05:52",
    self: true,
    type: "text",
    id: 3,
    user: "Briggs",
    content:
      "Esse pariatur officia sunt adipisicing laborum dolore et aliquip.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/25 16:04:04",
    self: true,
    type: "text",
    id: 1,
    user: "Willikins Abreu",
    content:
      "Ad ut tempor anim aliqua ipsum sunt ipsum nostrud id sunt aliquip in.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/23 18:57:44",
    self: true,
    type: "text",
    id: 1,
    user: "Willikins Abreu",
    content:
      "Voluptate dolor nisi elit consectetur fugiat excepteur dolor ea consequat.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/22 16:52:36",
    self: false,
    type: "text",
    id: 1,
    user: "Willikins Abreu",
    content:
      "Et occaecat velit eiusmod id exercitation pariatur consectetur sit quis.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/22 01:02:25",
    self: false,
    type: "text",
    id: 1,
    user: "Willikins Abreu",
    content:
      "Minim minim nostrud quis veniam adipisicing minim sunt sunt nostrud nisi ad.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/22 12:32:47",
    self: false,
    type: "text",
    id: 1,
    user: "Willikins Abreu",
    content: "Veniam eu voluptate pariatur exercitation do eiusmod.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/22 23:41:36",
    self: false,
    type: "text",
    id: 1,
    user: "Willikins Abreu",
    content:
      "Ut tempor nostrud esse pariatur exercitation deserunt commodo laborum duis cillum anim commodo.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/27 18:29:47",
    self: true,
    type: "text",
    id: 2,
    user: "Nellie",
    content:
      "Sint esse incididunt ea fugiat quis cupidatat consectetur proident nostrud aliquip cillum.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/25 18:59:12",
    self: false,
    type: "text",
    id: 2,
    user: "Nellie",
    content:
      "Officia quis non excepteur laborum do incididunt qui labore labore.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/25 14:32:20",
    self: false,
    type: "text",
    id: 2,
    user: "Nellie",
    content: "Nisi dolore nulla deserunt eu.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/26 10:21:03",
    self: false,
    type: "text",
    id: 2,
    user: "Nellie",
    content: "Qui aliqua nostrud reprehenderit reprehenderit laborum.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/25 08:52:50",
    self: false,
    type: "text",
    id: 2,
    user: "Nellie",
    content: "Nisi culpa nulla tempor cillum ut deserunt ea eiusmod esse.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/25 13:02:55",
    self: true,
    type: "text",
    id: 3,
    user: "Briggs",
    content: "Commodo magna et reprehenderit et tempor aliqua do commodo.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/25 05:33:28",
    self: true,
    type: "text",
    id: 3,
    user: "Briggs",
    content:
      "Ea ad dolore nisi non elit consequat ut fugiat ullamco nisi esse cillum.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/26 06:28:26",
    self: true,
    type: "text",
    id: 3,
    user: "Briggs",
    content:
      "Incididunt dolore dolore in elit irure exercitation adipisicing aute laboris est minim exercitation.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/25 07:59:56",
    self: true,
    type: "text",
    id: 3,
    user: "Briggs",
    content:
      "Culpa cillum dolor minim veniam cillum irure officia tempor consectetur aliqua aliqua cupidatat nisi nulla.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/25 15:28:43",
    self: true,
    type: "text",
    id: 3,
    user: "Briggs",
    content: "Ad enim nostrud sunt non officia.",
    replyto: 2,
    group: false,
  },
  {
    timestamp: "2021/11/26 14:46:45",
    self: false,
    type: "text",
    id: 3,
    user: "Briggs",
    content: "Irure et quis elit mollit enim laborum non nulla ea ullamco.",
    replyto: 2,
    group: false,
  },
];

const groupMsg = [
  {
    timestamp: "2021/11/23 11:09:09",
    self: true,
    type: "text",
    id: 4,
    user: "Dena",
    content:
      "Non id anim Lorem cillum commodo laborum amet sunt labore adipisicing.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/25 19:02:25",
    self: true,
    type: "text",
    id: 4,
    user: "Nellie",
    content: "Amet duis culpa amet consequat sunt in.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/22 02:47:57",
    self: false,
    type: "text",
    id: 4,
    user: "Luann",
    content: "Anim elit nisi enim reprehenderit.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/23 00:44:07",
    self: false,
    type: "text",
    id: 4,
    user: "Gray",
    content: "Deserunt in eiusmod cillum nisi nulla deserunt adipisicing.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/24 12:21:59",
    self: true,
    type: "text",
    id: 4,
    user: "Briggs",
    content:
      "Deserunt excepteur cillum ullamco aliqua labore velit tempor dolor commodo ea.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/22 12:23:59",
    self: false,
    type: "text",
    id: 4,
    user: "Lynette",
    content:
      "Labore dolore voluptate nulla dolore velit ullamco tempor eiusmod id adipisicing velit et in ipsum.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/25 21:12:02",
    self: true,
    type: "text",
    id: 4,
    user: "Prince",
    content:
      "Cillum commodo amet labore irure reprehenderit enim magna adipisicing aliquip officia mollit nulla eu.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/24 11:45:17",
    self: false,
    type: "text",
    id: 4,
    user: "Leonor",
    content: "Aliquip cupidatat sunt commodo commodo Lorem quis commodo.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/27 20:15:48",
    self: false,
    type: "text",
    id: 4,
    user: "Randolph",
    content:
      "Pariatur eu veniam elit magna laborum aliquip magna nostrud qui consequat cillum.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/28 10:24:26",
    self: false,
    type: "text",
    id: 4,
    user: "Burks",
    content:
      "Do dolor nisi dolore do adipisicing commodo ad voluptate cupidatat esse cupidatat aute sint non.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/26 14:29:24",
    self: false,
    type: "text",
    id: 4,
    user: "Jolene",
    content: "Exercitation reprehenderit ea id nisi cillum officia ex.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/26 20:32:52",
    self: false,
    type: "text",
    id: 4,
    user: "Gale",
    content: "Culpa amet elit sunt ut.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/26 22:40:20",
    self: false,
    type: "text",
    id: 4,
    user: "Lee",
    content:
      "Aute eu commodo officia consequat consectetur incididunt consequat aliqua nulla cupidatat eiusmod officia id.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/25 12:41:04",
    self: false,
    type: "text",
    id: 4,
    user: "Mercado",
    content:
      "Dolor elit enim commodo deserunt qui in aliquip aliqua ad velit officia fugiat.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/26 22:08:37",
    self: false,
    type: "text",
    id: 4,
    user: "Stacy",
    content:
      "Do est Lorem eiusmod est minim dolor laborum tempor labore proident enim veniam.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/25 07:39:49",
    self: false,
    type: "text",
    id: 4,
    user: "Mullen",
    content: "Ea ea in mollit labore sint sunt anim.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/27 11:06:07",
    self: false,
    type: "text",
    id: 4,
    user: "Deleon",
    content: "Et ipsum velit quis reprehenderit deserunt eu quis.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/26 17:54:47",
    self: false,
    type: "text",
    id: 4,
    user: "Alyson",
    content:
      "Ex officia laborum commodo irure ex reprehenderit ullamco est cillum.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/25 09:02:34",
    self: false,
    type: "text",
    id: 4,
    user: "Maricela",
    content: "Non voluptate nisi do non sint ad.",
    replyto: 2,
    group: true,
  },
  {
    timestamp: "2021/11/26 18:13:56",
    self: false,
    type: "text",
    id: 4,
    user: "Aguirre",
    content:
      "Commodo culpa incididunt cupidatat occaecat qui quis anim elit dolore incididunt ut.",
    replyto: 2,
    group: true,
  },
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

app.post("/form", paginateFilter(), (req, res) => {
  res.json(res.paginatedResult);
});

app.get("/message/chat:id", getMessages(), (req, res) => {
  res.json(res.sortedChat);
});

app.get("/message/chat:id", getMessages(), (req, res) => {
  res.json(res.sortedChat);
});

app.get("/message/chat", getContacts(), (req, res) => {
  res.json(res.sortedContact);
});

app.post("message/upload", upload.array["images"], uploadController.create);

function getMessages() {
  return (req, res, next) => {
    const id = parseInt(req.params.id);
    let chat = contactMsg.filter((item) => item.id === id);

    if (id === 4) {
      chat = groupMsg;
    }
    let msg = chat.sort((a, b) => {
      if (a.timestamp < b.timestamp) {
        return -1;
      }
      if (a.timestamp > b.timestamp) {
        return 1;
      }
      return 0;
    });

    res.sortedChat = msg;
    next();
  };
}

function getContacts() {
  return (req, res, next) => {
    let contact = contactMsg.sort((a, b) => {
      if (a.timestamp < b.timestamp) {
        return -1;
      }
      if (a.timestamp > b.timestamp) {
        return 1;
      }
      return 0;
    });
    let group = groupMsg.sort((a, b) => {
      if (a.timestamp < b.timestamp) {
        return -1;
      }
      if (a.timestamp > b.timestamp) {
        return 1;
      }
      return 0;
    });

    let c1 = contact.filter((item) => item.id === 1);
    let c2 = contact.filter((item) => item.id === 2);
    let c3 = contact.filter((item) => item.id === 3);
    let c4 = group.filter((item) => item.id === 4);
    let msg = [
      c1[c1.length - 1],
      c2[c2.length - 1],
      c3[c3.length - 1],
      c4[c4.length - 1],
    ];

    res.sortedContact = msg;
    next();
  };
}

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

function paginateFilter() {
  return (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const filteredData = filter(req.body.filter, req.body.index);
    const result = {};
    if (filteredData.length === 0) {
      result.results = [
        {
          name: "Nenhum resultado encontrado",
          category: "Nenhum resultado encontrado",
          releaseYear: "Nenhum resultado encontrado",
        },
      ];
    } else {
      result.results = filteredData.slice(startIndex, endIndex);
    }

    res.paginatedResult = result;
    next();
  };
}

function filter(filter, index) {
  let filteredData = [...tableData];
  if (index === "releaseYear") {
    filteredData = filteredData.filter((item) => {
      return item.releaseYear.toString().includes(filter.toString());
    });
  } else {
    filteredData = filteredData.filter((item) => {
      return item[index].toLowerCase().includes(
        filter
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f \s+]/g, " ")
      );
    });
  }
  return filteredData;
}

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
