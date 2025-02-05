#!/bin/bash

# Ensure environment variables are set
if [ -z "$MONGO_APP_USERNAME" ] || [ -z "$MONGO_APP_PASSWORD" ] || [ -z "$MONGO_DATABASE" ]; then
  echo "Error: One or more required environment variables are missing."
  echo "Ensure MONGO_APP_USERNAME, MONGO_APP_PASSWORD, and MONGO_DATABASE are set."
  exit 1
fi

echo "Waiting for MongoDB to start..."
sleep 2  # Ensure MongoDB is fully started


# Run the MongoDB command to create the user
echo "Creating MongoDB user..."

mongosh <<EOF
db = db.getSiblingDB("$MONGO_DATABASE");
db.createUser({
  user: "$MONGO_APP_USERNAME",
  pwd: "$MONGO_APP_PASSWORD",
  roles: [
    {
      role: "readWrite",
      db: "$MONGO_DATABASE"
    }
  ]
});
print("Application user created successfully!");
EOF

echo "MongoDB user creation script executed."

echo "Importing JSON data into MongoDB..."

mongoimport --host=localhost --port=27017 \
  --db=${MONGO_DATABASE} \
  --collection=users \
  --file=/docker-entrypoint-initdb.d/users.json \
  --jsonArray --username=${MONGO_ROOT_USERNAME} --password=${MONGO_ROOT_PASSWORD} --authenticationDatabase=admin

mongoimport --host=localhost --port=27017\
  --db=${MONGO_DATABASE} \
  --collection=categories \
  --file=/docker-entrypoint-initdb.d/categories.json \
  --jsonArray --username=${MONGO_ROOT_USERNAME} --password=${MONGO_ROOT_PASSWORD} --authenticationDatabase=admin

mongoimport --host=localhost --port=27017\
  --db=${MONGO_DATABASE} \
  --collection=maturities \
  --file=/docker-entrypoint-initdb.d/maturities.json \
  --jsonArray --username=${MONGO_ROOT_USERNAME} --password=${MONGO_ROOT_PASSWORD} --authenticationDatabase=admin

mongoimport --host=localhost --port=27017\
  --db=${MONGO_DATABASE} \
  --collection=technologies \
  --file=/docker-entrypoint-initdb.d/technologies.json \
  --jsonArray --username=${MONGO_ROOT_USERNAME} --password=${MONGO_ROOT_PASSWORD} --authenticationDatabase=admin

echo "MongoDB data import complete."
