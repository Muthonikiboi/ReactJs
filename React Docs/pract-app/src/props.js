function Avatar({ person, size }) {
    return (
      <img
        className="avatar"
        src='https://i.imgur.com/YfeOqp2.jpg'
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }
  
  export default function Persons() {
    return (
      <div>
        <Avatar
          size={100}
          person={{ 
            name: 'Katsuko Saruhashi', 
            imageId: 'YfeOqp2'
          }}
        />
        <Avatar
          size={80}
          person={{
            name: 'Aklilu Lemma', 
            imageId: 'OKS67lh'
          }}
        />
        <Avatar
          size={50}
          person={{ 
            name: 'Lin Lanying',
            imageId: '1bX5QH6'
          }}
        />
      </div>
    );
  }