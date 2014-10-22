"use strict";

module.exports = function(sequelize, DataTypes) {
  var Actor = sequelize.define("Actor", {
    name: DataTypes.STRING,
    MovieId: {
      type:DataTypes.INTEGER,
      // foreignKey: true
    }
  }, {
    classMethods: {
      associate: function(db) {
        Actor.hasMany(db.Movie);
      }
    }
  });

  return Actor;
};
