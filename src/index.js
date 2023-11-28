export class ValidateError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidateError';
  }
}

class Character {
  constructor(name, type) {
    if (name.length <= 10 && name.length >= 2) {
      this.name = name;
    } else {
      throw new ValidateError('incorrect name');
    }
    if (Character.types.includes(type)) {
      this.type = type;
    } else {
      throw new ValidateError('incorrect type');
    }
    this.health = 100;
    this.level = 1;
    this.attack = 5;
    this.defense = 5;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack = Math.round(this.attack * 1.2);
      this.defense = Math.round(this.defense * 1.2);
    } else {
      throw new Error("You can't level up a dead person");
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= Math.round(points * (1 - this.defense / 100));
    } else {
      this.health = 0;
    }
  }
}

Character.types = [
  'Bowerman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

// class Bowerman extends Character {
export class Bowerman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    if (type === 'Bowerman') {
      this.type = type;
    } else {
      throw new ValidateError('type does not match class');
    }
    this.attack = 25;
    this.defense = 25;
  }
}

// class Swordsman extends Character {
export class Swordsman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    if (type === 'Swordsman') {
      this.type = type;
    } else {
      throw new ValidateError('type does not match class');
    }
    this.attack = 40;
    this.defense = 10;
  }
}

// class Magician extends Character {
export class Magician extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    if (type === 'Magician') {
      this.type = type;
    } else {
      throw new ValidateError('type does not match class');
    }
    this.attack = 10;
    this.defense = 40;
  }
}

// class Undead extends Character {
export class Undead extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    if (type === 'Undead') {
      this.type = type;
    } else {
      throw new ValidateError('type does not match class');
    }
    this.attack = 25;
    this.defense = 25;
  }
}

// class Zombie extends Character {
export class Zombie extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    if (type === 'Zombie') {
      this.type = type;
    } else {
      throw new ValidateError('type does not match class');
    }
    this.attack = 40;
    this.defense = 10;
  }
}

// class Daemon extends Character {
export class Daemon extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    if (type === 'Daemon') {
      this.type = type;
    } else {
      throw new ValidateError('type does not match class');
    }
    this.attack = 10;
    this.defense = 40;
  }
}
