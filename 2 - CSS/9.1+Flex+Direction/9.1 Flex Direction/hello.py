def input_until_hello():
    inputs = ""  # List to store inputs
    
    while True:
        user_input = input("Please enter a word (type 'hello' to finish): ")
        inputs += " " + user_input  # Store the input
        
        if user_input.lower() == "hello":
            break  # Break the loop if "hello" is entered
    
    # Print all inputs
    print("All inputs:")
    print(inputs)

# Test the function
input_until_hello()