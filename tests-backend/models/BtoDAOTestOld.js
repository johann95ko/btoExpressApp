const btoDAO = require('../../src/DAO/BtoDAO');

test('btoDAO instantiates properly', () => {
    btoDAO = new BtoDAO();
    expect(btoDAO).toBeDefined();
    expect(btoDAO).toBeInstanceOf(BtoDAO);
});

test('btoDAO sets BTO properly', () => {
    btoDAO = new BtoDAO()
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({key: 1, name: "testBto", location: "testLocation", flatTypeAndCost})
      };
    requests = new Request(options, function (err, res, body) {
        // handle err or use response and response boy
      }); 
    btoDAO.setBto(requests)
    //expect(btoDAO.getBto).toBe();
});