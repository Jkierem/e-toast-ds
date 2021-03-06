read -p "You are about to release. This is a dangerous thing to do and will cause irreversible changes to your local repo. Do you know what you are doing?[y/n] " choice
echo 
if [[ $choice =~ ^[Yy]$ ]]
then
  if [ -z "$1" ]
  then
    echo "No version name supplied"
  else
    if [[ $1 == v* ]]
    then
      VERSION_NAME=$1
    else 
      echo "Version must start with a lowercave 'v'. Adding it automatically..."
      VERSION_NAME=v$1
    fi
    BRANCH_NAME=release-$VERSION_NAME
    if [ `git branch --list $BRANCH_NAME` ]
    then
      echo "Branch name $BRANCH_NAME already exists. Releasing over older versions is not a good idea. If you want to proceed delete the branch and run this command again."
    else
      echo "Creating release branch for version $VERSION_NAME..."
      git branch $BRANCH_NAME
      git checkout $BRANCH_NAME
      echo "Cleaning packages..."
      npm run clean || exit 2
      echo "Moving css package..."
      cp -r ./packages/css ./css 
      echo "Cleaning up root..."
      echo "Deleting demo..."
      rm -rf ./demo
      echo "Deleting node_modules..."
      rm -rf ./node_modules
      echo "Deleting packages..."
      rm -rf ./packages
      echo "Deleting other package files..."
      rm lerna.json
      rm package-lock.json
      rm package.json
      rm yarn.lock
      rm README.md
      rm .editorconfig
      rm .gitignore
      echo "Moving css to root..."
      cp -a ./css/. ./
      echo "Cleaning root..."
      rm -rf ./docs
      rm -rf ./css
      echo "Tagging branch..."
      git add -A
      git commit -m "$VERSION_NAME"
      git tag -a $VERSION_NAME -m "$VERSION_NAME" || exit 2
      echo "Ready to push tag!"
      echo "To finish release, push tag to remote and delete release branch. You can do so running:"
      echo
      echo "      git push origin $VERSION_NAME"
      echo "      git checkout develop"
      echo "      git branch -D $BRANCH_NAME"
      echo
      echo "Now go ahead and create a release on github"
      echo
      echo "      Go to tags https://github.com/Jkierem/e-toast-ds/tags"
      echo "      On the options of the $VERSION_NAME tag and select 'Create Release'"
      echo "      Remeber to name it the same as the tag: $VERSION_NAME"
      echo
      echo "Lastly verify the artifacts only contain the css code"
    fi
  fi
else 
  echo "Release aborted"
fi