import React from 'react';

const App = () => {
    return (
        <div style={{
            textAlign: 'center',
            padding: '40px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f5f5f5',
            minHeight: '100vh'
        }}>
            <h1>Welcome to My React App</h1>
            <p>Displaying beautiful images below:</p>
            
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
                marginTop: '30px',
                maxWidth: '1000px',
                margin: '30px auto'
            }}>
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    padding: '20px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                    <img 
                        src="/test/image.svg" 
                        alt="React Logo" 
                        style={{
                            maxWidth: '100%',
                            height: '200px',
                            objectFit: 'contain'
                        }} 
                    />
                    <h3>React App</h3>
                </div>
                
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    padding: '20px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                    <div style={{
                        width: '200px',
                        height: '200px',
                        backgroundColor: '#2196F3',
                        borderRadius: '50%',
                        margin: '0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '24px',
                        fontWeight: 'bold'
                    }}>
                        Web App
                    </div>
                    <h3>Modern Design</h3>
                </div>
                
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    padding: '20px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                    <div style={{
                        width: '200px',
                        height: '200px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '10px',
                        margin: '0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '18px'
                    }}>
                        Responsive UI
                    </div>
                    <h3>Beautiful Gradients</h3>
                </div>
            </div>
            
            <footer style={{
                marginTop: '50px',
                color: '#666',
                borderTop: '1px solid #ddd',
                paddingTop: '20px'
            }}>
                <p>Built with React & Love ❤️</p>
            </footer>
        </div>
    );
};

export default App;