//hash table
class HashTable {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }
  
    // Simple hash function to calculate the hash for a given key
    hash(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total = total + key.charCodeAt(i);
      }
      return total % this.size;
    }
  
    // Method to set a key-value pair in the hash table
    set(key, value) {
      const index = this.hash(key);
      const bucket = this.table[index];
  
      // If no bucket exists, create a new one
      if (!bucket) {
        this.table[index] = [[key, value]];
      } else {
        // Check if the key already exists in the bucket
        const sameKeyItem = bucket.find((item) => item[0] === key);
  
        if (sameKeyItem) {
          // Update the value if key is found
          sameKeyItem[1] = value;
        } else {
          // Otherwise, add a new key-value pair
          bucket.push([key, value]);
        }
      }
    }
  
    // Method to get the value associated with a key
    get(key) {
      const index = this.hash(key);
      const bucket = this.table[index];
  
      if (bucket) {
        const sameKeyItem = bucket.find((item) => item[0] === key);
        if (sameKeyItem) {
          return sameKeyItem[1];
        }
      }
      return undefined;
    }
  
    // Method to remove a key-value pair from the hash table
    remove(key) {
      const index = this.hash(key);
      const bucket = this.table[index];
  
      if (bucket) {
        const sameKeyItem = bucket.find((item) => item[0] === key);
        if (sameKeyItem) {
          bucket.splice(bucket.indexOf(sameKeyItem), 1);
        }
      }
    }
  
    // Method to display the contents of the hash table
    display() {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
          console.log(i, this.table[i]);
        }
      }
    }
  }

  const table = new HashTable(50);
  table.set("name","akhil");
  table.set("last name","das");
  table.set("age",23);
  table.display()