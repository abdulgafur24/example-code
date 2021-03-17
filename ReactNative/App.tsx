const Stack = createStackNavigator();

const App = () => {
  const initialRouteName = isAuthorized ? "BottomTabs" : "Intro";

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName} headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
