var exercise = {};

exercise.countRecords = function(data){
    return data.length; 
};

exercise.countDistrictCrimes = function(data,district){
    var districts = 0;
    var countDistrict = function(districtI){
        if (districtI [19] === district){districts++};
    };
    data.forEach(countDistrict);
    return districts; 
};

exercise.countPrimaryType = function(data,primaryType){
    var crimes = 0;
    var countCrime = function(crime){
        if (crime [13] === primaryType){crimes++};
    };
    data.forEach(countCrime);
    return crimes;
};

exercise.countLocation = function(data,location){
    var places = 0;
    var countPlaces = function(place){
        if (place [15] === location){places++};
    };
    data.forEach(countPlaces);
    return places;
};


exercise.buildLatLngPoint = function(crime){
    var point = {};    
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;
};




