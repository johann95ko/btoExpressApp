const User = require('../../src/models/User');

test('User instantiates properly', () => {
    user = new User()
    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(User)
});

test('User instantiates properly with arguments', () => {
    user = new User("abc@bmail.com", false, "!ZxnA(*^%")
    expect(user.email).toBe("abc@bmail.com");
    expect(user.verified).toBe(false);
    expect(user.password).toBe("!ZxnA(*^%");
});

test('User functions work properly', () => {
    user = new User("abc@bmail.com", false, "!ZxnA(*^%")
   
    user.setEmail("bcd@bmail.com")
    expect(user.getEmail("bcd@bmail.com")).toBe("bcd@bmail.com")

    expect(user.getVerified()).toBe(true);

    user.setPassword("_065LKJAnz")
    expect(user.getPassword()).toBe("_065LKJAnz")
});