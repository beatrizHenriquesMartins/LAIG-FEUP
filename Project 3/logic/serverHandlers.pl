%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%                                       Commands                                                  %%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Require your Prolog Files here

parse_input(handshake, handshake).
parse_input(test(C,N), Res) :- test(C,Res,N).
parse_input(quit, goodbye).
parse_input(board, Numbers):-
	finalBoard(B),boardToNumbers(B,Numbers).

parse_input(initial_board,Board):-
	emptyBoardBlockade(TempBoard),
	boardToNumbers(TempBoard,Board).

parse_input(move_player(NumberBoard,Direction,Player,Pawn),NewBoardNumbers):-
	boardToNumbers(TempBoard,NumberBoard),
	transformToCoordinates(TempBoard,Player,Pawn,Direction,Xi,Yi,Xf,Yf,PawnName),
	setListElement(TempBoard,Xf,Yf,1,1,PawnName,NewBoard),
	isAStartHouse(Xi,Yi,OldPawnName),
	setListElement(NewBoard,Xi,Yi,1,1,OldPawnName,NewBoard2),
	boardToNumbers(NewBoard2,NewBoardNumbers).

parse_input(put_wall(Board,WallOri,FirstX,FirstY,SecondX,SecondY),NewBoard):-
  boardToNumbers(TempBoard,Board),
  writeWallOnBoard(TempBoard,WallOri,FirstX,FirstY,SecondX,SecondY,TempBoard2),
	boardToNumbers(TempBoard2,NewBoard).

parse_input(valid_position(Board,Direction,Player,Pawn),Response):-
	boardToNumbers(TempBoard,Board),
	transformToCoordinates(TempBoard,Player,Pawn,Direction,Xi,Yi,_,_,_),
	(
		hasNoWall(TempBoard,Direction,Xi,Yi) ->
			Response = 1;
			Response = 0
	).

parse_input(bot_pawn_and_direction(Board,Player),[Pawn,Direction]):-
	boardToNumbers(B,Board),
	return_direction_and_pawn(B,Player,Pawn,D),
	direction_to_string(D,Direction).

parse_input(want_walls,Response):-
	random(0,2,Response).

return_direction_and_pawn(Board,Player,Pawn,Direction):-
	randomPawn(Pawn),
	randomDirection(Direction),
	transformToCoordinates(Board,Player,Pawn,Direction,Xi,Yi,Xf,Yf,_PawnName),
	isAvalidMove(Board,Xi,Yi,Xf,Yf,Direction,19,17).

return_direction_and_pawn(Board,Player,Pawn,Direction):-
	return_direction_and_pawn(Board,Player,Pawn,Direction).

test(_,[],N) :- N =< 0.
test(A,[A|Bs],N) :- N1 is N-1, test(A,Bs,N1).

bot_pawn_and_direction(_).

put_wall(_,_,_,_,_).

move_player(NumberBoard,Direction,Player,Pawn):-
	write('entrei'),
	boardToNumbers(TempBoard,NumberBoard),
	transformToCoordinates(TempBoard,Player,Pawn,Direction,Xi,Yi,Xf,Yf,PawnName),
	setListElement(TempBoard,Xf,Yf,1,1,PawnName,NewBoard),
	isAStartHouse(Xi,Yi,OldPawnName),
	setListElement(NewBoard,Xi,Yi,1,1,OldPawnName,_NewBoard2).
