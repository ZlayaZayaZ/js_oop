import {
  ValidateError, Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../index';

describe('Bowerman', () => {
  test('test class Bowerman', () => {
    const obj = new Bowerman('Ivan', 'Bowerman');
    expect(obj.name).toBe('Ivan');
    expect(obj.type).toBe('Bowerman');
    expect(obj.health).toBe(100);
    expect(obj.level).toBe(1);
    expect(obj.attack).toBe(25);
    expect(obj.defense).toBe(25);
  });

  test.each([
    ['A', 'Bowerman', 'incorrect name'],
    ['AnnaSokolova', 'Bowerman', 'incorrect name'],
    ['Anna', 'Children', 'incorrect type'],
    ['Anna', 'Swordsman', 'type does not match class'],
  ])('test class Bowerman errors', (nameObj, typeObj, errorObj) => {
    expect(() => {
      new Bowerman(nameObj, typeObj);
    }).toThrow(new ValidateError(errorObj));
  });

  test('testing the levelUp function for Bowerman', () => {
    const obj = new Bowerman('Ivan', 'Bowerman');
    obj.damage(60);
    obj.levelUp();
    expect(obj.health).toBe(100);
    expect(obj.level).toBe(2);
    expect(obj.attack).toBe(30);
    expect(obj.defense).toBe(30);
  });

  test('checking class Bowerman function levelUp for error', () => {
    expect(() => {
      const obj = new Bowerman('Ivan', 'Bowerman');
      obj.damage(200);
      obj.levelUp();
    }).toThrow(new Error("You can't level up a dead person"));
  });

  test('testing the damage(points) function for Bowerman', () => {
    const obj = new Bowerman('Ivan', 'Bowerman');
    obj.damage(60);
    expect(obj.health).toBe(55);
  });

  test('no damage to dead', () => {
    const obj = new Bowerman('Ivan', 'Bowerman');
    obj.damage(200);
    obj.damage(70);
    expect(obj.health).toBe(0);
  });
});

describe('Swordsman', () => {
  test('test class Swordsman', () => {
    const obj = new Swordsman('Ivan', 'Swordsman');
    expect(obj.name).toBe('Ivan');
    expect(obj.type).toBe('Swordsman');
    expect(obj.health).toBe(100);
    expect(obj.level).toBe(1);
    expect(obj.attack).toBe(40);
    expect(obj.defense).toBe(10);
  });

  test.each([
    ['A', 'Swordsman', 'incorrect name'],
    ['AnnaSokolova', 'Swordsman', 'incorrect name'],
    ['Anna', 'Children', 'incorrect type'],
    ['Anna', 'Zombie', 'type does not match class'],
  ])('test class Swordsman errors', (nameObj, typeObj, errorObj) => {
    expect(() => {
      new Swordsman(nameObj, typeObj);
    }).toThrow(new ValidateError(errorObj));
  });

  test('testing the levelUp function for Swordsman', () => {
    const obj = new Swordsman('Ivan', 'Swordsman');
    obj.damage(60);
    obj.levelUp();
    expect(obj.health).toBe(100);
    expect(obj.level).toBe(2);
    expect(obj.attack).toBe(48);
    expect(obj.defense).toBe(12);
  });

  test('checking class Swordsman function levelUp for error', () => {
    expect(() => {
      const obj = new Swordsman('Ivan', 'Swordsman');
      obj.damage(200);
      obj.levelUp();
    }).toThrow(new Error("You can't level up a dead person"));
  });

  test('testing the damage(points) function for Swordsman', () => {
    const obj = new Swordsman('Ivan', 'Swordsman');
    obj.damage(60);
    expect(obj.health).toBe(46);
  });

  test('no damage to dead', () => {
    const obj = new Swordsman('Ivan', 'Swordsman');
    obj.damage(200);
    obj.damage(70);
    expect(obj.health).toBe(0);
  });
});

describe('Magician', () => {
  test('test class Magician', () => {
    const obj = new Magician('Ivan', 'Magician');
    expect(obj.name).toBe('Ivan');
    expect(obj.type).toBe('Magician');
    expect(obj.health).toBe(100);
    expect(obj.level).toBe(1);
    expect(obj.attack).toBe(10);
    expect(obj.defense).toBe(40);
  });

  test.each([
    ['A', 'Magician', 'incorrect name'],
    ['AnnaSokolova', 'Magician', 'incorrect name'],
    ['Anna', 'Children', 'incorrect type'],
    ['Anna', 'Swordsman', 'type does not match class'],
  ])('test class Magician errors', (nameObj, typeObj, errorObj) => {
    expect(() => {
      new Magician(nameObj, typeObj);
    }).toThrow(new ValidateError(errorObj));
  });

  test('testing the levelUp function for Magician', () => {
    const obj = new Magician('Ivan', 'Magician');
    obj.damage(60);
    obj.levelUp();
    expect(obj.health).toBe(100);
    expect(obj.level).toBe(2);
    expect(obj.attack).toBe(12);
    expect(obj.defense).toBe(48);
  });

  test('checking class Magician function levelUp for error', () => {
    expect(() => {
      const obj = new Magician('Ivan', 'Magician');
      obj.damage(200);
      obj.levelUp();
    }).toThrow(new Error("You can't level up a dead person"));
  });

  test('testing the damage(points) function for Magician', () => {
    const obj = new Magician('Ivan', 'Magician');
    obj.damage(60);
    expect(obj.health).toBe(64);
  });

  test('no damage to dead', () => {
    const obj = new Magician('Ivan', 'Magician');
    obj.damage(200);
    obj.damage(70);
    expect(obj.health).toBe(0);
  });
});

describe('Daemon', () => {
  test('test class Daemon', () => {
    const obj = new Daemon('Ivan', 'Daemon');
    expect(obj.name).toBe('Ivan');
    expect(obj.type).toBe('Daemon');
    expect(obj.health).toBe(100);
    expect(obj.level).toBe(1);
    expect(obj.attack).toBe(10);
    expect(obj.defense).toBe(40);
  });

  test.each([
    ['A', 'Daemon', 'incorrect name'],
    ['AnnaSokolova', 'Daemon', 'incorrect name'],
    ['Anna', 'Children', 'incorrect type'],
    ['Anna', 'Swordsman', 'type does not match class'],
  ])('test class Daemon errors', (nameObj, typeObj, errorObj) => {
    expect(() => {
      new Daemon(nameObj, typeObj);
    }).toThrow(new ValidateError(errorObj));
  });

  test('testing the levelUp function for Daemon', () => {
    const obj = new Daemon('Ivan', 'Daemon');
    obj.damage(60);
    obj.levelUp();
    expect(obj.health).toBe(100);
    expect(obj.level).toBe(2);
    expect(obj.attack).toBe(12);
    expect(obj.defense).toBe(48);
  });

  test('checking class Daemon function levelUp for error', () => {
    expect(() => {
      const obj = new Daemon('Ivan', 'Daemon');
      obj.damage(200);
      obj.levelUp();
    }).toThrow(new Error("You can't level up a dead person"));
  });

  test('testing the damage(points) function for Daemon', () => {
    const obj = new Daemon('Ivan', 'Daemon');
    obj.damage(60);
    expect(obj.health).toBe(64);
  });

  test('no damage to dead', () => {
    const obj = new Daemon('Ivan', 'Daemon');
    obj.damage(200);
    obj.damage(70);
    expect(obj.health).toBe(0);
  });
});

describe('Undead', () => {
  test('test class Undead', () => {
    const obj = new Undead('Ivan', 'Undead');
    expect(obj.name).toBe('Ivan');
    expect(obj.type).toBe('Undead');
    expect(obj.health).toBe(100);
    expect(obj.level).toBe(1);
    expect(obj.attack).toBe(25);
    expect(obj.defense).toBe(25);
  });

  test.each([
    ['A', 'Undead', 'incorrect name'],
    ['AnnaSokolova', 'Undead', 'incorrect name'],
    ['Anna', 'Children', 'incorrect type'],
    ['Anna', 'Swordsman', 'type does not match class'],
  ])('test class Undead errors', (nameObj, typeObj, errorObj) => {
    expect(() => {
      new Undead(nameObj, typeObj);
    }).toThrow(new ValidateError(errorObj));
  });

  test('testing the levelUp function for Undead', () => {
    const obj = new Undead('Ivan', 'Undead');
    obj.damage(60);
    obj.levelUp();
    expect(obj.health).toBe(100);
    expect(obj.level).toBe(2);
    expect(obj.attack).toBe(30);
    expect(obj.defense).toBe(30);
  });

  test('checking class Undead function levelUp for error', () => {
    expect(() => {
      const obj = new Undead('Ivan', 'Undead');
      obj.damage(200);
      obj.levelUp();
    }).toThrow(new Error("You can't level up a dead person"));
  });

  test('testing the damage(points) function for Undead', () => {
    const obj = new Undead('Ivan', 'Undead');
    obj.damage(60);
    expect(obj.health).toBe(55);
  });

  test('no damage to dead', () => {
    const obj = new Undead('Ivan', 'Undead');
    obj.damage(200);
    obj.damage(70);
    expect(obj.health).toBe(0);
  });
});

describe('Zombie', () => {
  test('test class Zombie', () => {
    const obj = new Zombie('Ivan', 'Zombie');
    expect(obj.name).toBe('Ivan');
    expect(obj.type).toBe('Zombie');
    expect(obj.health).toBe(100);
    expect(obj.level).toBe(1);
    expect(obj.attack).toBe(40);
    expect(obj.defense).toBe(10);
  });

  test.each([
    ['A', 'Zombie', 'incorrect name'],
    ['AnnaSokolova', 'Zombie', 'incorrect name'],
    ['Anna', 'Children', 'incorrect type'],
    ['Anna', 'Swordsman', 'type does not match class'],
  ])('test class Zombie errors', (nameObj, typeObj, errorObj) => {
    expect(() => {
      new Zombie(nameObj, typeObj);
    }).toThrow(new ValidateError(errorObj));
  });

  test('testing the levelUp function for Zombie', () => {
    const obj = new Zombie('Ivan', 'Zombie');
    obj.damage(60);
    obj.levelUp();
    expect(obj.health).toBe(100);
    expect(obj.level).toBe(2);
    expect(obj.attack).toBe(48);
    expect(obj.defense).toBe(12);
  });

  test('checking class Zombie function levelUp for error', () => {
    expect(() => {
      const obj = new Zombie('Ivan', 'Zombie');
      obj.damage(200);
      obj.levelUp();
    }).toThrow(new Error("You can't level up a dead person"));
  });

  test('testing the damage(points) function for Zombie', () => {
    const obj = new Zombie('Ivan', 'Zombie');
    obj.damage(60);
    expect(obj.health).toBe(46);
  });

  test('no damage to dead', () => {
    const obj = new Zombie('Ivan', 'Zombie');
    obj.damage(200);
    obj.damage(70);
    expect(obj.health).toBe(0);
  });
});
