const SERVER_URL = 'https://fakerapi.it/api/v2';
const ITEMS_PER_PAGE = '20';

function loadUsers(resolve, reject) {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch(`${SERVER_URL}/users?_quantity=${ITEMS_PER_PAGE}&_gender=male`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          resolve(result.data);
        })
        .catch(() => {
          reject(null);
        });
}

function loadUserDetails(id, resolve, reject) {
  const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch(`${SERVER_URL}/users?_quantity=1&_gender=male`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        resolve(result.data);
      })
      .catch(() => {
        reject(null);
      });
}

function loadVendors(resolve, reject) {
  const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch(`${SERVER_URL}/users?_quantity=${ITEMS_PER_PAGE}&_gender=male`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        resolve(result.data);
      })
      .catch(() => {
        reject(null);
      });
}

function loadVendorDetails(id, resolve, reject) {
  const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch(`${SERVER_URL}/users?_quantity=1&_gender=male`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        resolve(result.data);
      })
      .catch(() => {
        reject(null);
      });
}

function loadServices(resolve, reject) {
  const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch(`${SERVER_URL}/products?_quantity=${ITEMS_PER_PAGE}&_categories_type=uuid`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        resolve(result.data);
      })
      .catch(() => {
        reject(null);
      });
}

function loadServiceDetails(id, resolve, reject) {
  const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch(`${SERVER_URL}/products?_quantity=1&_categories_type=uuid`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        resolve(result.data);
      })
      .catch(() => {
        reject(null);
      });
}

export { loadUsers, loadUserDetails, loadVendors, loadVendorDetails, loadServices, loadServiceDetails };