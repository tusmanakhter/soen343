let User = require('./User');
let ProductCatalog = require('../../domain-layer/classes/ProductCatalog');
let DesktopMapper = require('../../domain-layer/mappers/DesktopMapper');
let LaptopMapper = require('../../domain-layer/mappers/LaptopMapper');
let MonitorMapper = require('../../domain-layer/mappers/MonitorMapper');
let TabletMapper = require('../../domain-layer/mappers/TabletMapper');

/**
 * Class describes an Admin.
 * @class Client
 * @export
 */
class Client extends User {
    /**
     * @constructor
     * @param {string} firstName first name of user
     * @param {string} lastName last name of user
     * @param {string} address home address of user
     * @param {string} email email of user
     * @param {number} phone phone number of user
     * @param {string} password user password, hashed
     * @param {Boolean} isAdmin is the user an Admin

     */
    constructor(firstName, lastName, address, email, phone, password, isAdmin) {
        super(firstName, lastName, address, email, phone, password, isAdmin);

        this.productCatalog = new ProductCatalog();
    }

    /**
     * View items in product catalog
     * To be run on an instance of item.
     * @method display
     * @param {function} callback function
     *
     */
    getDesktop(callback) {
        DesktopMapper.getDesktop(function(err, data) {
            return callback(null, data);
        });
    }
    getLaptop(callback) {
        LaptopMapper.getLaptop(function(err, data) {
            return callback(null, data);
        });
    }
    getMonitor(callback) {
        MonitorMapper.getMonitor(function(err, data) {
            return callback(null, data);
        });
    }
    getTablet(callback) {
        TabletMapper.getTablet(function(err, data) {
            return callback(null, data);
        });
    }
    getProductCatalogInstance() {
        return this.productCatalog;
    }
}

module.exports = Client;