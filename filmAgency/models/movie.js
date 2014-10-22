"use strict";

module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define("Movie", {
    title: DataTypes.STRING,
    ActorId: {
      type:DataTypes.INTEGER,
      // foreignKey: true
    }
  }, {
    classMethods: {
      associate: function(db) {
        Movie.hasMany(db.Actor);
      }
    }
  });

  return Movie;
};
