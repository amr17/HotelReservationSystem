'use strict';
module.exports = (sequelize, DataTypes) => {
  const HOTEL = sequelize.define('HOTEL', {
    name:{
      types:DataTypes.STRING,
      primaryKry:true
    } ,
    location:{
      types:DataTypes.STRING,
      primaryKry:true
    } ,
    credit: DataTypes.FLOAT,
    telephone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    postal_code: DataTypes.STRING,
    premium: DataTypes.BOOLEAN,
    hotel_owner_username: DataTypes.STRING,
    suspended: DataTypes.BOOLEAN,
    approval:DataTypes.BOOLEAN
  }, {});
  HOTEL.associate = function(models) {
    HOTEL.belongsTo(models.HOTEL_OWNER, {foreignKey: 'hotel_owner_username', targetKey: 'hotel_owner_username'});
    // associations can be defined here
  };
  return HOTEL;
};